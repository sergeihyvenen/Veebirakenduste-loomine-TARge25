export default function ItemList({ items, onDelete, onUpdate }: any) {
  return (
    <ul>
      {items.map((i: any) => (
        <li key={i.id}>
          {i.name}

          <button
            onClick={() => {
              console.log("CLICK EDIT");
              //Kasutaja sisestab uue nime ja see saadetakse update funktsioonile.
              const newName = prompt("New name:", i.name);

              console.log("PROMPT RESULT:", newName);

              if (newName !== null) {
                onUpdate(i.id, newName);
              }
            }}
          >
            Edit
          </button>

          <button onClick={() => onDelete(i.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}