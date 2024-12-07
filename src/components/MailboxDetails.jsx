import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  const selectedLetters = letters.filter((letter) => letter.mailboxId === Number(mailboxId));

  if (!selectedBox) {
    return <p>Mailbox not found!</p>;
  }
  
  return (
    <>
      <h2>Mailbox {selectedBox._id} Details:</h2>
      <dl>
        <dt>Boxholder:</dt>
        <dd><i>{selectedBox.name}</i></dd>
        <dt>Box Size:</dt>
        <dd><i>{selectedBox.size}</i></dd>
      </dl>

      <h3>Letters Sent:</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters sent to this mailbox yet.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <p><strong>Recipient:</strong> {letter.recipient}</p>
              <p><strong>Message:</strong> {letter.message}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MailboxDetails;