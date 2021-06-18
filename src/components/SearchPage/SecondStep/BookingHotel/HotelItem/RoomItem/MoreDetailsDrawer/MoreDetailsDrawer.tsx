import React, {useState} from 'react';
import {Button, Drawer, Image} from 'antd';

type PropsType = {
    photos: Array<string>;
    name: string;
    desc: string;
    personAmount: number;
}

export const MoreDetailsDrawer: React.FC<PropsType> = React.memo((props) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const photoList = props.photos.map(photo => {
        return <Image
            width={600}
            src={photo}
            key={photo}
        />
    });
    return (
        <div>
            <Button onClick={showDrawer}>More details</Button>
            <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <div>
                    <b>{props.name}</b>
                </div>
                <div>
                    for {props.personAmount} {props.personAmount > 1 ? 'persons' : 'person'}
                </div>
                <div>
                    {props.desc}
                </div>

                <Image.PreviewGroup>
                    {photoList}
                </Image.PreviewGroup>
            </Drawer>
        </div>
    );
})
