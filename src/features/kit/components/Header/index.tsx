import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { pathsConfig } from '@/pathsConfig'

import { useAppSelector } from '@/hooks'
import { TextButton } from '../Buttons'
import Flex from '../Flex'
import { HeaderStyledWrapper } from './Header.styled.tsx'
import { Avatar } from 'antd'

import avaProfileGold from '../../../../../public/avaProfileGold.svg'
import logoName from '../../../../../public/logoName.svg'

interface Props {
    subheading: string
}

const Header: FC<Props> = () => {
    const user = useAppSelector(state => state.auth.user)

    const navigate = useNavigate()

    return (
        <HeaderStyledWrapper>
            <img src={logoName} className='logoName' alt='logoName'/>
            {user?.isAuth ? <Flex>
                <TextButton onClick={() => { navigate(pathsConfig.profile) }}>{user?.nick} <Avatar size='large' src={avaProfileGold}/></TextButton>
            </Flex> : <TextButton onClick={() => { navigate(pathsConfig.login) }}>
                Войти <Avatar size='large' src={avaProfileGold} alt='q'/>
            </TextButton>}
        </HeaderStyledWrapper>
    )
}

export default Header
