/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

// editor
import type { TEmbedConfig } from "@plane/editor";

export type TIssueEmbedHookProps = {
  fetchEmbedSuggestions?: (payload: any) => Promise<any>;
  projectId?: string;
  workspaceSlug?: string;
};

const widgetCallback = () => null;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useIssueEmbed = (_props: TIssueEmbedHookProps) => {
  const issueEmbedProps: TEmbedConfig["issue"] = {
    widgetCallback,
  };

  return {
    issueEmbedProps,
  };
};
