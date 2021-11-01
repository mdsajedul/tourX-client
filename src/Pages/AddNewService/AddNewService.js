import React from 'react';
import { useForm } from 'react-hook-form';
import './addNewService.css'

const AddNewService = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="p-5">
             <div className="my-bookings-container w-100">
                <div className="bookings-header  p-2">
                    <div className="d-flex align-items-center">
                    <i class="fas fa-plus-circle pe-2"></i> 
                        <h4>Add New Package</h4>
                    </div>
                </div>
                <div className="p-3">
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input type="text" {...register("name", { required: true })}  placeholder="Package Name" />
                            </div>
                            <div className="design">
                                <textarea type="text" {...register("overview",{required:true})}  placeholder="Package Overview"/>
                            </div>
                            <div>
                                <input type="text" {...register("duration",{required:true})}  placeholder="Package Duration"/>
                            </div>
                            <div>
                                <input type="text" {...register("cost",{required:true})}  placeholder="Package Cost"/>
                            </div>
                            <div>
                                <input type="text" {...register("image",{required:true})}  placeholder="Image Link"/>
                            </div>

                            <input type="submit" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default AddNewService;