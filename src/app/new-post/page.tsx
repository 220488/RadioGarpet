"use client";

import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";

import styles from "./style.module.scss";
import FontCredit from "../FontCredit/page";
import PlayIcon from "../../../public/icons/play.svg";

export default function NewPost() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [topLineText, setTopLineText] = useState("radio");
  const [bottomLineText, setBottomLineText] = useState("garpet");
  const handleClickPlay = () => {
    setIsPlaying(true);
    setTopLineText("Khmer Ear");
    setBottomLineText("No.1");
  };
  return (
    <div className={styles.newPostPage}>
      <div
        className={styles.postCover}
        style={{ marginLeft: isPlaying ? "7vw" : "auto" }}
      >
        <div
          className={classNames(styles.title, styles.topLine)}
          style={{ fontSize: isPlaying ? "100px" : "120px" }}
        >
          {topLineText}
        </div>
        <div className={classNames(styles.title, styles.bottomLine)}>
          {bottomLineText}
        </div>
        <Image
          src={`/posts-cover/khmer-ear.JPG`}
          alt=""
          width={800}
          height={600}
        />
      </div>
      {!isPlaying && (
        <>
          <div onClick={handleClickPlay}>
            <PlayIcon className={styles.play} />
          </div>
          <FontCredit
            fontName="Bianzhidai"
            fontAuthor="Xiaoyuan Gao, notyourtypefoundry"
            distributeOrg="velvetyne.fr"
          />
        </>
      )}
    </div>
  );
}
