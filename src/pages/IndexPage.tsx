import styled from 'styled-components';
import { detectDevice, isSberPortal } from '@sberdevices/plasma-ui/utils/deviceDetection';
import { Card, Body1, Body3, Col, Row, CardContent, TextBoxBigTitle, TextBox, CardBody, Container } from '@sberdevices/plasma-ui'
import Img from './Img';
const heightMap = {
    sberPortal: 247,
    sberBox: 336,
    mobile: 165,
};

const StyledCard = styled(Card)`
    margin-bottom: ${detectDevice() === 'mobile' ? 8 : 32}px;
    height: ${heightMap[detectDevice()]}px;
`;

const StyledBody1 = styled(Body1)`
    color: rgba(255, 255, 255, 0.56);
    margin-top: 8px;
    margin-bottom: 2px;
    width: ${isSberPortal() ? '100px' : '100%'};
    display: ${isSberPortal() ? 'inline-block' : 'block'};
`;

const StyledBody3 = styled(Body3)`
    width: ${isSberPortal() ? 'calc(100% - 100px)' : '100%'};
    display: ${isSberPortal() ? 'inline-block' : 'block'};
`;

const MarginTop = styled.div`
    margin-top: 20px;
`;

const Half: React.FC = ({ children }) => (
    <Col sizeS={4} sizeM={3} sizeL={4} sizeXL={6}>
        {children}
    </Col>
);

const paddingLeft = {
    sberPortal: 12,
    sberBox: 52,
    mobile: 0,
};


export const IndexPage = ({dispatch}: any) => {
    const onClickGortenz = () => {
        dispatch({type: 'gortenzia'});
    }
    const onClickHriz = () => {
        dispatch({type: 'hrizantema'});
    }
    const onClickAlstro = () => {
        dispatch({type: 'alstromeria'});
    }
    const onClickGvozdika = () => {
        dispatch({type: 'gvozdika'});
    }
    const onClickGipso = () => {
        dispatch({type: 'gipsafila'});
    }
    const onClickEustoma = () => {
        dispatch({type: 'eustoma'});
    }
    const onClickRoza = () => {
        dispatch({type: 'roza'});
    }
    return (
        <Container>
            <Row>
                <Col sizeS={4} sizeM={4} sizeL={8} sizeXL={8}>
                    <Row>
                        <Half>
                                <StyledCard outlined scaleOnFocus onClick={onClickGortenz}>
                                    <CardBody>
                                        <Img src="/gortenz.jpeg" />
                                        <CardContent cover>
                                            <TextBox>
                                                <TextBoxBigTitle>??????????????????</TextBoxBigTitle>
                                            </TextBox>
                                        </CardContent>
                                    </CardBody>
                                </StyledCard>
                        </Half>
                        <Half>
                                <StyledCard outlined scaleOnFocus onClick={onClickHriz}>
                                    <CardBody>
                                        <Img src="/hriz.jpeg" />
                                        <CardContent cover>
                                            <TextBox>
                                                <TextBoxBigTitle>????????????????????</TextBoxBigTitle>
                                            </TextBox>
                                        </CardContent>
                                    </CardBody>
                                </StyledCard>
                        </Half>
                        <Half>
                            <StyledCard outlined scaleOnFocus onClick={onClickAlstro}>
                                <CardBody>
                                    <Img src="/alstro.jpeg" />
                                    <CardContent cover>
                                        <TextBox>
                                            <TextBoxBigTitle>????????????????????????</TextBoxBigTitle>
                                        </TextBox>
                                    </CardContent>
                                </CardBody>
                            </StyledCard>
                        </Half>
                        <Half>
                            <StyledCard outlined scaleOnFocus onClick={onClickGvozdika}>
                                <CardBody>
                                    <Img src="/gvozdi.jpeg" />
                                    <CardContent cover>
                                        <TextBox>
                                            <TextBoxBigTitle>????????????????</TextBoxBigTitle>
                                        </TextBox>
                                    </CardContent>
                                </CardBody>
                            </StyledCard>
                        </Half>
                        <Half>
                            <StyledCard outlined scaleOnFocus onClick={onClickGipso}>
                                <CardBody>
                                    <Img src="/gipsa.jpeg" />
                                    <CardContent cover>
                                        <TextBox>
                                            <TextBoxBigTitle>??????????????????</TextBoxBigTitle>
                                        </TextBox>
                                    </CardContent>
                                </CardBody>
                            </StyledCard>
                        </Half>
                        <Half>
                            <StyledCard outlined scaleOnFocus onClick={onClickEustoma}>
                                <CardBody>
                                    <Img src="/eustoma.jpeg" />
                                    <CardContent cover>
                                        <TextBox>
                                            <TextBoxBigTitle>??????????????</TextBoxBigTitle>
                                        </TextBox>
                                    </CardContent>
                                </CardBody>
                            </StyledCard>
                        </Half>
                        <Half>
                            <StyledCard outlined scaleOnFocus onClick={onClickRoza}>
                                <CardBody>
                                    <Img src="/roza.jpeg" />
                                    <CardContent cover>
                                        <TextBox>
                                            <TextBoxBigTitle>???????? ????????????????</TextBoxBigTitle>
                                        </TextBox>
                                    </CardContent>
                                </CardBody>
                            </StyledCard>
                        </Half>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default IndexPage;