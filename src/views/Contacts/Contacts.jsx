import "./Contacts.scss";
import Forms from "./components/Form/Forms";
import OurContacts from "./components/OurContacts/OurContacts";

const Contacts = () => {

    return (
        <>
            <div className="wrapper">
                <div className="contacts__container container">
                    <OurContacts />
                    <Forms />
                </div>
            </div>
        </>
    );
}

export default Contacts;