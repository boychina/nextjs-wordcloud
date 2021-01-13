import React from "react";
import Wordcloud from "./components/Wordcloud";
import { Word as WordItem } from "@/types/word";

interface IProps {
  words: WordItem[];
  containerClass?: string;
}

const NextWordCloud = (props: IProps) => {
  const { containerClass } = props;
  return (
    <div className={containerClass}>
      <Wordcloud {...props} />
    </div>
  );
};

export default NextWordCloud;

// export type Word = WordItem;
