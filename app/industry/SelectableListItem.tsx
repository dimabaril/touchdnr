import styles from "./SelectableListItem.module.css";

interface SelectableListItemProps {
  value: string;
  active: boolean;
  onClick: () => void;
}

export default function SelectableListItem({
  value,
  active,
  onClick,
}: SelectableListItemProps) {
  return (
    <li
      className={active ? `${styles.item} ${styles.itemActive}` : styles.item}
      onClick={onClick}
    >
      {value}
    </li>
  );
}
