import Button from "./Button";

export default function EntryForm() {
  return (
    <form action="">
      <h2 className="entry-form">New Entry</h2>

      <label htmlFor="entry-form__motto">Motto</label>
      <input id="entry-form__motto" type="text" placeholder="use me!" />

      <label htmlFor="entry-form__notes">Notes</label>
      <textarea
        name="entry-form__notes"
        id="entry-form__notes"
        placeholder="use me!"
      ></textarea>

      <Button />
    </form>
  );
}
