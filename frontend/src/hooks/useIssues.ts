import useSWR, {useSWRConfig} from "swr";
import useSWRMutation from "swr/mutation";
import {deleteIssue, getAllIssues, Issue, NewIssue, postIssue, putIssues} from "../api/issues.ts";

export function useAllIssues() {
  return useSWR<Issue[]>('/issues', getAllIssues);
}

export function usePostIssue() {
  const { mutate } = useSWRConfig();
  return useSWRMutation<Issue, unknown, string, NewIssue>('/issues/post', (_: string, { arg }) => postIssue(arg), {
    onSuccess: () => {
      void mutate('/issues');
    },
  });
}

export function usePutIssue() {
  const { mutate } = useSWRConfig();
  return useSWRMutation<Issue, unknown, string, Issue>('/issues/put', (_: string, { arg }) => putIssues(arg), {
    onSuccess: () => {
      void mutate('/issues');
    },
  });
}

export function useDeleteIssue() {
  const { mutate } = useSWRConfig();
  return useSWRMutation<boolean, unknown, string, string>('/issues/delete', (_: string, { arg }) => deleteIssue(arg), {
    onSuccess: () => {
      void mutate('/issues');
    },
  });
}
