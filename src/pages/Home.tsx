import React , { ReactElement} from 'react';
import dashBoradData from '../constant/dashboard';




function Home (): ReactElement {
    return (
        <>
            <Container>
                <HeaderNAme>
                    M_Gins 
                </HeaderNAme>
                <FlexContainer>
                    {
                        dashBoradData.map( (data) => {
                            if (data?.allowedGroup){
                                // this function is imported from src/utils/authorization.ts
                                if (!hasGroupPermissions(permissions,data?.allowedGroup))
                                return false;
                            }

                            return (
                                <FlexItem key={data.key}>
                                    <CustomCard />
                                </FlexItem>
                            )
                        })
                    }
                </FlexContainer>
            </Container> 
        </>
    )
}


export default Home;