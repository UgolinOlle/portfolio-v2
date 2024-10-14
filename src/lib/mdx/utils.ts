/**
 * @file utils.ts
 * @description Utils for the MDX
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import rehypeShiki from '@shikijs/rehype';
import { transformerNotationHighlight } from '@shikijs/transformers';
import type { ShikiTransformer } from 'shiki/core';
import type { PluggableList } from 'unified';

/**
 * @function getFileName
 * @description Get the filename from the raw string.
 * @param raw The raw string.
 * @returns The filename.
 */
const getFileName = (raw?: string): string | null => {
  if (!raw) return null;

  const items = raw.split(' ');
  for (const item of items) {
    const splitItem = item.split('.');

    if (splitItem.length === 1) continue;

    const extension = splitItem.at(-1);

    if (extension?.length === 0) continue;

    return splitItem.join('.');
  }
  return null;
};

/**
 * @function transformerMetadataLanguageClassName
 * @description Transformer for the language class name.
 * @returns The transformer.
 */
const transformerMetadataLanguageClassName = (): ShikiTransformer => {
  let language = 'js';
  let fileName: string | null = null;

  return {
    preprocess(_tree, fileInfo) {
      language = fileInfo.lang;
      fileName = getFileName(fileInfo.meta?.__raw);
    },
    code() {
      this.addClassToHast(this.pre, `language-${language}`);
      this.pre.properties.dataLanguage = language;

      if (fileName) {
        this.addClassToHast(this.pre, `filename-${fileName}`);
        this.pre.properties.dataFileName = fileName;
      }
    },
  };
};

// --- Shiki plugin
const shikiPlugin = [
  rehypeShiki,
  {
    theme: 'github-dark',
    transformers: [transformerNotationHighlight(), transformerMetadataLanguageClassName()],
  },
] satisfies PluggableList[number];

export const rehypePlugin = [shikiPlugin] satisfies PluggableList;
