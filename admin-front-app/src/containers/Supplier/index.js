import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { createSupplier, getOrdersByAccountId } from '../../actions';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import NewModal from '../../components/UI/NewModal';
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
* @author
* @function Supplier
**/

export const Supplier = (props) => {

    const supplier = useSelector(state => state.supplier);

    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [_id,setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");




    const dispatch = useDispatch();

    useEffect(() => {
        if (supplier.message) {
            toast(supplier.message);
        }
    }, [supplier.message])

    const handleCloseCreate = () => setShowCreateModel(false);
    const handleSaveCreate = (e) => {
        e.preventDefault();
        const supplier = { name, address, note };
        dispatch(createSupplier(supplier));

        setShowCreateModel(false)
    }
    const handleShowCreate = () => setShowCreateModel(true);

    const handleCloseUpdate = () => setShowUpdateModel(false);

    const handleShowUpdate = (supplier) => {
        // e.preventDefault();
        setId(supplier._id)
        // const supplier = {_id, name, address, note };
        setName(supplier.name)
        setAddress(supplier.address)
        setNote(supplier.note)
        setShowUpdateModel(true);
    }

    const handleSaveUpdate = (e) => {
        e.preventDefault();
        const supplier = {_id, name, address, note };
        dispatch(createSupplier(supplier));
        setShowCreateModel(false)

    }

    const renderSupplers = () => {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>T??n Nh?? Cung C???p</th>
                        <th>?????a Ch???</th>
                        <th>Ghi Ch??</th>
                        <th>S???a</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        supplier.suppliers ?
                            supplier.suppliers.map((supplier, index) =>
                                <tr key={supplier._id}>
                                    <td>{index + 1}</td>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.address}</td>
                                    <td>{supplier.note}</td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            onClick={() => handleShowUpdate(supplier)}
                                        >
                                            S???a
                                        </Button>
                                    </td>

                                </tr>
                            ) : null
                    }

                </tbody>
            </Table>
        )
    }


    const renderCreateSupplier = () => {
        return (
            <NewModal
                show={showCreateModel}
                handleClose={handleCloseCreate}
                modalTitle={'T???o Nh?? Cung C???p M???i'}
                handleSave={handleSaveCreate}
            >
                <Input
                    value={name}
                    placeholder={'Name'}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <Input
                    value={address}
                    placeholder={'Address'}
                    onChange={(e) => { setAddress(e.target.value) }}
                // errorMessage={'no no'}
                />
                <Input
                    value={note}
                    placeholder={'Ghi Ch??'}
                    onChange={(e) => { setNote(e.target.value) }}
                />

            </NewModal>
        )
    }

    const renderUpdateSupplier = () => {
        return (
            <NewModal
                show={showUpdateModel}
                handleClose={handleCloseUpdate}
                modalTitle={'C???p Nh???t Nh?? Cung C???p'}
                handleSave={handleSaveUpdate}
            >
                <Input
                    value={name}
                    placeholder={'Name'}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <Input
                    value={address}
                    placeholder={'Address'}
                    onChange={(e) => { setAddress(e.target.value) }}
                />
                <Input
                    value={note}
                    placeholder={'Note'}
                    onChange={(e) => { setNote(e.target.value) }}
                />
            </NewModal>
        )
    }

    return (
        <Layout sidebar>
            <Container >
                <Row style={{ marginBottom: '50px' }}>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Nh?? Cung C???p</h3>
                            <Button
                                variant="primary"
                                onClick={handleShowCreate}
                            >
                                T???o Nh?? Cung C???p M???i
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {renderSupplers()}
                    </Col>
                </Row>
            </Container>


            {renderCreateSupplier()}

            {renderUpdateSupplier()}

            <ToastContainer />

        </Layout>
    )

}