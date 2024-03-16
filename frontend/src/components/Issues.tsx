import {FC} from "react";
import {useAllIssues} from "../hooks/useIssues.ts";
import {Card, Space} from "antd";

interface IssuesProps {}

const Issues: FC<IssuesProps> = () => {
  const { data, isLoading, error } = useAllIssues();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data && (
        <Space size={8} direction="vertical">
          {data.map((issue) => (
            <Card
              key={issue.id}
              title={issue.title}
            >
              {issue.description}
            </Card>
          ))}
        </Space>
      )}
    </>
  );
}

export default Issues;
