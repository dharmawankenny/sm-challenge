import {FC, useState} from "react";
import {Button, Input, Space} from "antd";
import {usePostIssue} from "../hooks/useIssues.ts";

interface AddIssueProps {}

const AddIssue: FC<AddIssueProps> = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { trigger, isMutating } = usePostIssue();

  return (
    <Space direction="vertical">
      <Input
        placeholder="Issue Title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        disabled={isMutating}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
        disabled={isMutating}
      />
      <Button
        type="primary"
        disabled={isMutating || !title || !description}
        onClick={() => title && description && trigger({ title, description })}
        block
      >
        Add Issue
      </Button>
    </Space>
  );
}

export default AddIssue;
