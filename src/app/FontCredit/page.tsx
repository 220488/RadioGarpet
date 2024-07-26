import styles from "./style.module.css"

type FontCreditProps = {
  fontName: string;
  fontAuthor: string;
  distributeOrg: string;
}

export default function FontCredit({fontName, fontAuthor, distributeOrg}: FontCreditProps) {
  return (
    <div className={styles.creditText}>
      {`${fontName} by ${fontAuthor}. Distributed by ${distributeOrg}.`}
    </div>
  )
}