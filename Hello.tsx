import { Button, Text } from "react-native";
import React, { useState } from "react";
type HiProps = {
    name: string,
    age: number
}
const Hello = ( { name, age }: HiProps ) =>
{
    const [ check, setCheck ] = useState( true );
    return (
        <>
            <Text>Xin chào tôi là : { name } { age } tuổi</Text>
            <Button
                onPress={ () =>
                {
                    setCheck( false );
                } }
                disabled={ !check }
                title={ check ? 'Ấn vào tôi' : 'Thank you!' }
            />
        </>

    )
}
export default Hello;