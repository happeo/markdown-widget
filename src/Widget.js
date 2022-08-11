import React, { useEffect, useState } from "react";
import { toast } from "@happeouikit/toast";
import { Card } from "@happeouikit/card";
import styled from "styled-components";
import widgetSDK from "@happeo/widget-sdk";
import { padding300 } from "@happeouikit/layout";
import { gray09 } from "@happeouikit/colors";
import { MarkdownEditor } from "./components/markdown-editor";
import { Loader } from "./components/loader";
import { DEMO_TEXT, HIDDEN_TEXT_FOR_EMPTY_STRING } from "./constants";

const Widget = ({ id, editMode }) => {
  const [widgetApi, setWidgetApi] = useState();
  const [content, setContent] = useState("");

  useEffect(() => {
    const doInit = async () => {
      // Init API
      const widgetApi = await widgetSDK.api.init(id);

      // Do stuff
      setWidgetApi(widgetApi);
      await setSavedContentToState(widgetApi);
    };
    doInit();
  }, [id]);

  const setSavedContentToState = async (widgetApi) => {
    const fetchedContent = await widgetApi.getContent();
    setContent(fetchedContent || DEMO_TEXT);
  };

  const haddleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    //hidden text is necessary because widget api doesn't save empty string

    widgetApi
      .setContent(newContent || HIDDEN_TEXT_FOR_EMPTY_STRING)
      .catch((e) => toast.error({ message: `Autosave failed` }));
  };

  const handleContentSave = async () => {
    widgetApi.setContent(content).then((res) => {});
  };

  if (!widgetApi) {
    return <Loader numberOfRows={20} />;
  }

  return (
    <Container>
      {editMode && (
        <MarkdownEditor
          content={content}
          onMdChange={haddleContentChange}
          onSave={handleContentSave}
        />
      )}
      <Card style={{ marginTop: 8 }}>
        <widgetSDK.uikit.ContentRenderer type={"MARKDOWN"} content={content} />
      </Card>
    </Container>
  );
};

const Container = styled.div`
  padding: ${padding300};
  background-color: ${gray09};
`;
const StyledUl = styled.ul`
  list-style: disc;
  padding: ${padding300};
`;

export default Widget;
