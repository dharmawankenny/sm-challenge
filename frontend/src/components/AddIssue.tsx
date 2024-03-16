import {FC, useState} from "react";
import {Button, Input, Space} from "antd";
import {usePostIssue} from "../hooks/useIssues.ts";

interface AddIssueProps {}

const AddIssue: FC<AddIssueProps> = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { trigger, isMutating } = usePostIssue();

  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <Input
        placeholder="Issue Title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        disabled={isMutating}
      />
      <Input.TextArea
        placeholder="Description"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
        disabled={isMutating}
      />
      <Button
        type="primary"
        onClick={async () => {
          if (title && description) {
            await trigger({ title, description });
            setTitle("");
            setDescription("");
          }
        }}
        disabled={!title || !description}
        loading={isMutating}
        block
      >
        Add Issue
      </Button>
    </Space>
  );
}

export default AddIssue;
