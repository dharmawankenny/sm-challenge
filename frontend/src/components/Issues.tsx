import {FC} from "react";
import {useAllIssues} from "../hooks/useIssues.ts";
import {Space, Typography} from "antd";
import Issue from "./Issue.tsx";

interface IssuesProps {}

const Issues: FC<IssuesProps> = () => {
  const { data, isLoading, error } = useAllIssues();

  return (
    <>
      {isLoading && (
        <Typography.Text type="secondary">
          Loading...
        </Typography.Text>
      )}
      {error && (
        <Typography.Text type="danger">
          Error loading issues ... try again later
        </Typography.Text>
      )}
      {data && (
        <Space style={{ width: '100%' }} size={8} direction="vertical">
          {data.map((issue) => (
            <Issue issue={issue} key={issue.id} />
          ))}
          {data.length === 0 && (
            <Typography.Text type="secondary">
              No issues available
            </Typography.Text>
          )}
        </Space>
      )}
    </>
  );
}

export default Issues;
