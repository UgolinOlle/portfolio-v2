'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Heading } from '../ui/headers';

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

interface CommitListProps {
  repoName: string;
  className?: string;
}

/**
 * @name Commit
 * @description List to display the latest commits of a repository.
 * @returns {React.ReactElement} The component.
 * @exports CommitList
 */
const CommitList: React.FC<CommitListProps> = ({
  className,
  repoName,
}): React.ReactElement => {
  // -- Variables
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      if (!repoName) {
        setError('Repository name is required.');
        return;
      }

      try {
        const response = await fetch(`/api/github/repo?repo=${repoName}`);
        const data = await response.json();

        if (response.ok) {
          setCommits(data);
        } else {
          setError(data.error || 'Failed to fetch commits.');
        }
      } catch (err) {
        setError('An error occurred while fetching data.');
      }
    };

    fetchCommits();
  }, [repoName]);

  if (error) toast.error(error);

  return (
    <div className={cn(className, 'py-4 h-[55vh] md:h-[40vh]')}>
      <Heading variant="h3">Dernier commits</Heading>
      <ul className="space-y-3 mt-4">
        {commits.map((commit) => (
          <motion.li
            key={commit.sha}
            className="p-2 bg-neutral-200 dark:bg-neutral-800 rounded overflow-hidden"
            whileHover={{ height: 65 }}
            transition={{ type: 'spring', stiffness: 120 }}
            onHoverStart={() => setHovered(commit.sha)}
            onHoverEnd={() => setHovered(null)}
          >
            <p className="font-semibold">{commit.commit.message}</p>
            <motion.div
              className={`text-neutral-600 dark:text-neutral-400 text-sm ${
                hovered === commit.sha ? 'block' : 'hidden'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered === commit.sha ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {commit.commit.author.name} -{' '}
              {new Date(commit.commit.author.date).toLocaleString()}
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export { CommitList };
