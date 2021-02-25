import React, {useEffect,useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickName] = useState('');

    useEffect(()=> {
        // console.log('Rendered');
        // console.log({
        //     name,
        //     nickname
        // });
        console.log("마운트 될 때만 실행");
    },[]);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickName(e.target.value);
    };

    return (
        <div>
          <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
          </div>
          <div>
            <div>
              <b>이름:</b> {name}
            </div>
            <div>
              <b>닉네임: </b>
              {nickname}
            </div>
          </div>
        </div>
      );
};

export default Info;