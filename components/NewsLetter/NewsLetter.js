
 "use client"
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const url =
  "https://gmail.us10.list-manage.com/subscribe/post?u=19af9faf66593f78ad573fb73&amp;id=eb8c5707bf&amp;f_id=00cca1e5f0";

const SimpleForm = () => <MailchimpSubscribe url={url} />;

export default function App() {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
}
