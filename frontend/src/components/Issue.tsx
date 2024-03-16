import {FC, useState} from "react";
import {useDeleteIssue, usePutIssue} from "../hooks/useIssues.ts";
import {Button, Card, Input, Space} from "antd";
import {Issue as IssueType} from "../api/issues.ts";

interface IssuesProps {
  issue: IssueType
}

const Issue: FC<IssuesProps> = ({ issue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedIssue, setEditedIssue] = useState(issue);

  const putIssue = usePutIssue();
  const deleteIssue = useDeleteIssue();

  return (
    <Card
      title={isEditing ? (
        <Input
          placeholder={"Issue Title"}
          value={editedIssue.title}
          onChange={(evt) => setEditedIssue({ ...editedIssue, title: evt.target.value })}
        />
      ) : issue.title}
      extra={(
        <Space size={4} style={{ marginLeft: 16 }}>
          {isEditing && (
            <Button
              danger
              onClick={() => {
                setEditedIssue(issue);
                setIsEditing(false);
              }}
              disabled={putIssue.isMutating}
            >
              Cancel
            </Button>
          )}
          <Button
            type={isEditing ? "primary" : "default"}
            onClick={() => {
              if (isEditing) {
                putIssue.trigger(editedIssue);
                setIsEditing(false);
              } else {
                setIsEditing(true);
              }
            }}
            loading={putIssue.isMutating}
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
          {!isEditing && (
            <Button
              onClick={() => deleteIssue.trigger(issue.id)}
              loading={deleteIssue.isMutating}
              danger
            >
              Delete
            </Button>
          )}
        </Space>
      )}
    >
      {isEditing ? (
        <Input.TextArea
          placeholder={"Issue Title"}
          value={editedIssue.description}
          onChange={(evt) => setEditedIssue({ ...editedIssue, description: evt.target.value })}
        />
      ) : issue.description}
    </Card>
  );
}

export default Issue;
