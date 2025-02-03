/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { NovuCore } from "../core.js";
import { workflowsCreate } from "../funcs/workflowsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useNovuContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type WorkflowsCreateMutationVariables = {
  idempotencyKey?: string | undefined;
  options?: RequestOptions;
};

export type WorkflowsCreateMutationData =
  operations.WorkflowControllerCreateResponse;

export function useWorkflowsCreateMutation(
  options?: MutationHookOptions<
    WorkflowsCreateMutationData,
    Error,
    WorkflowsCreateMutationVariables
  >,
): UseMutationResult<
  WorkflowsCreateMutationData,
  Error,
  WorkflowsCreateMutationVariables
> {
  const client = useNovuContext();
  return useMutation({
    ...buildWorkflowsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyWorkflowsCreate(): MutationKey {
  return ["@novu/api", "Workflows", "create"];
}

export function buildWorkflowsCreateMutation(
  client$: NovuCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: WorkflowsCreateMutationVariables,
  ) => Promise<WorkflowsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyWorkflowsCreate(),
    mutationFn: function workflowsCreateMutationFn({
      idempotencyKey,
      options,
    }): Promise<WorkflowsCreateMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(workflowsCreate(
        client$,
        idempotencyKey,
        mergedOptions,
      ));
    },
  };
}
