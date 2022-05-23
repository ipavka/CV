import React from 'react';
import sContainer from "../../common/styles/Container.module.scss";
import sItem from '../../common/styles/Item.module.css';
import s from '../contacts/Contacts.module.css';
import {TitleCustom} from '../../common/com-components/TitleCustom';

export const Contacts = () => {
    return (
        <div id={'Contacts'} className={`${sContainer.container} ${s.contactsContainer}`}>
            <div className={`${sItem.item} ${s.contactsItem}`}>

                <TitleCustom title={'Contacts'} hLevel={2} costumeStyle={s.title}/>

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

