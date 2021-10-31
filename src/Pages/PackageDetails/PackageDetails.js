import React from 'react';
import { useParams } from 'react-router';

const PackageDetails = () => {
    const {packageId} = useParams();
    return (
        <div>
            <h2>Details {packageId}</h2>
        </div>
    );
};

export default PackageDetails;