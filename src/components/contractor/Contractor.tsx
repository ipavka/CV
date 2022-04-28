import React from 'react';
import s from './Contractor.module.css';
import sContainer from '../../common/styles/Container.module.css';
import sItem from '../../common/styles/Item.module.css';
import sTitle from '../../common/styles/Title.module.css';


export const Contractor = () => {
    return (
        <div className={`${sContainer.container} ${s.contractorContainer}`}>
            <div className={`${sItem.item} ${s.contractorItem}`}>

                <div className={`${sTitle.titleStyle} ${s.title}`}>
                    <h3>Ready for remote work</h3>
                </div>

                <button>conclude a contract</button>
            </div>

        </div>
    );
};

