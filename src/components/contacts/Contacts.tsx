import React from 'react';
import sContainer from "../../common/styles/Container.module.css";
import sItem from '../../common/styles/Item.module.css';
import s from "../contacts/Contacts.module.css";
import sTitle from "../../common/styles/Title.module.css";

export const Contacts = () => {
    return (
        <div className={`${sContainer.container} ${s.contactsContainer}`}>
            <div className={`${sItem.item} ${s.contactsItem}`}>

                <div className={`${sTitle.titleStyle} ${s.title}`}>
                    <h2>Contacts</h2>
                </div>

                <form>
                    <input placeholder={'name...'}/>
                    <input placeholder={'@mail...'}/>
                    <textarea placeholder={'message text...'}/>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};

