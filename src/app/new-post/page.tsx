import Image from "next/image"
import classNames from "classnames"

import styles from "./style.module.scss"
import FontCredit from "../FontCredit/page"

export default function NewPost() {
  return (
    <div className={styles.newPostPage}>
      <div className={styles.postCover}>
      <div className={classNames(styles.title, styles.topLine)}>radio</div>
      <div className={classNames(styles.title, styles.bottomLine)}>garpet</div>
        <Image
          src={`/posts-cover/khmer-ear.JPG`}
          alt=""
          width={800}
          height={600}
        />
      </div>
      <FontCredit
        fontName="Bianzhidai"
        fontAuthor="Xiaoyuan Gao, notyourtypefoundry"
        distributeOrg="velvetyne.fr"
      />
    </div>
  )
}