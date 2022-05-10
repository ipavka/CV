import React from 'react';
import s from './Contractor.module.scss';
import sContainer from '../../common/styles/Container.module.scss';
import sItem from '../../common/styles/Item.module.css';
import {TitleCustom} from "../../common/com-components/TitleCustom";


export const Contractor = () => {
    return (
        <div className={`${sContainer.container} ${s.contractorContainer}`}>
            <div className={`${sItem.item} ${s.contractorItem}`}>
                <TitleCustom title={'Ready for remote work'} hLevel={3} costumeStyle={s.title}/>
                <button>conclude a contract</button>
            </div>

        </div>
    );
};

