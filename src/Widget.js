import React, { useEffect, useState, useCallback } from "react";
import { toast } from "@happeouikit/toast";

import styled from "styled-components";
import widgetSDK from "@happeo/widget-sdk";
import { ButtonSecondary } from "@happeouikit/buttons";

import { MarkdownEditor } from "./components/markdown-editor";
import { Loader } from "./components/loader";
import { DEMO_TEXT } from "./constants";

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
    setContent(fetchedContent);
  };

  const haddleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    if (widgetApi)
      widgetApi
        .setContent(newContent)
        .catch((e) => toast.error({ message: `Autosave failed` }));
  };

  const onAddDemoContent = useCallback(() => {
    const newContent = content + DEMO_TEXT;
    setContent(newContent),
      widgetApi
        .setContent(newContent)
        .catch((e) => toast.error({ message: `Autosave failed` }));
  }, [content, widgetApi]);

  const handleContentSave = async () => {
    widgetApi.setContent(content).then((res) => {});
  };

  if (!widgetApi) {
    return <Loader numberOfRows={20} />;
  }

  return (
    <Container>
      {editMode && (
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <MarkdownEditor
            content={content}
            onMdChange={haddleContentChange}
            onSave={handleContentSave}
          />
          <PositionTopRight>
            <ButtonSecondary text="MD template" onClick={onAddDemoContent} />
          </PositionTopRight>
        </div>
      )}

      <widgetSDK.uikit.ContentRenderer type={"MARKDOWN"} content={content} />
    </Container>
  );
};

const Container = styled.div``;

const PositionTopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
`;

export default Widget;
