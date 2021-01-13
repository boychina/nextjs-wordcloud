import React, { useMemo } from "react";
import { createCanvas } from "canvas";
import cloud from "d3-cloud";
import { random, maxBy } from "lodash";
import { COLORS } from "@/config/constant";
import { Word, WordLayout, WordSize } from "@/types/word";

interface IProps {
  words: Word[];
}

const Wordcloud: React.FC<IProps> = (props: IProps) => {
  const { words } = props;

  if (!words || !words.length) return null;

  const maxValue = maxBy(words)?.value || 1;

  //构建传入layout的words
  let resultWords: WordSize[] = [];
  words.forEach((word: Word) => {
    resultWords.push({
      ...word,
      size:
        ((Math.log(word.value) * 4) / (Math.log(maxValue) - Math.log(1))) * 4 +
        20,
    });
  });
  const resultWordsLayout: WordLayout[] = [...resultWords];
  const layout = useMemo(
    () =>
      // @ts-ignore：类型校验错误
      cloud()
        .size([400, 300])
        // @ts-ignore：类型“Canvas”缺少类型“HTMLCanvasElement”的以下属性: toBlob, transferControlToOffscreen等
        .canvas(() => createCanvas(400, 300))
        .padding(2)
        .rotate(() => ~~(Math.random() * 2) * 90)
        .fontSize((d) => d.size),
    []
  );
  layout.words(resultWordsLayout);
  layout.start();

  return (
    <div>
      <svg width="400" height="300">
        <g transform="translate(190, 150)">
          {resultWords.map((word: WordLayout) => (
            <text
              key={word.name}
              textAnchor="middle"
              fill={COLORS[random(10)]}
              transform={`translate(${word.x}, ${word.y})rotate(${word.rotate})`}
              style={{ fontSize: word.size }}
            >
              <a>{word.name}</a>
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Wordcloud;
