import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Product() {
    const { register, trigger, formState: { errors }, handleSubmit, reset } = useForm();
    const [comments, setComments] = useState([]);
    
    function onFormSubmit(data) {
        setComments([...comments, data])
        alert(JSON.stringify(data));
        reset();
    }

    const validation = {
        name: {
            required: 'Name is required.',
            minLength: {
                value: 3,
                message: 'Minimum 3 Characters.'
            },
            maxLength: {
                value: 15,
                message: 'Maximum 15 Characters.'
            }
        },
        rating: {
            required: 'Rating is required.'
        },
        comment: {
            required: 'Comment is required.',
            maxLength: {
                value: 150,
                message: 'Maximum 150 Characters.'
            }
        },
    }

    return (
        <>
            <div className='container w-50 bg-light p-3'>
                <h1 className='text-center mb-3'>Apple Store</h1>
                <div className="w-100 text-center mb-3">
                    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661782458693" width={350} />
                </div>
                <h2>Apple iPhone 14 Pro (128GB, Deep Purple)</h2>
                <p>The new Apple iPhone 14 Pro is a great new smartphone that should be perfect for all your daily tasks. The Apple iPhone 14 Pro run the powerful A15 chip...</p>
                <div className="my-4">
                    <button className="btn btn-primary mr-2">Buy Now</button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#commentBox">Comment</button>
                </div>
                {/* Popup Form */}
                <div className="modal fade" id="commentBox" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Submit Comment</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit(onFormSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className={`form-control ${errors.name && 'is-invalid'}`} id="name" placeholder="Enter Your Name" {...register('name', validation.name)} onKeyUp={() => trigger('name')} />
                                        {errors.name && <small className="form-text text-danger">{errors.name.message}</small>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rating">Rating</label>
                                        <select className={`form-control ${errors.rating && 'is-invalid'}`} id="rating" {...register('rating', validation.rating)} onKeyUp={() => trigger('rating')}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        {errors.rating && <small className="form-text text-danger">{errors.rating.message}</small>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="commentSection">Comment</label>
                                        <textarea className={`form-control ${errors.comment && 'is-invalid'}`} id="commentSection" rows="3" {...register('comment', validation.comment)} onKeyUp={() => trigger('comment')}></textarea>
                                        {errors.comment && <small className="form-text text-danger">{errors.comment.message}</small>}
                                    </div>
                                    <button className="btn btn-primary float-right">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* key features */}
                <h5><strong>Key Features</strong></h5>
                <ul>
                    <li>An innovative <strong>48MP camera</strong> for mind-blowing detail.</li>
                    <li><strong>Crash detection</strong>, a vital safety feature designed to save lives.</li>
                    <li><strong>Designed for durability </strong>with Ceramic Shield, tougher than any smartphone glass.</li>
                    <li><strong>Dynamic island is </strong>a magical new way to interact with your iPhone.<strong> </strong></li>
                    <li><strong>Up to 4x</strong> the resolution for jaw-dropping cropping.</li>
                    <li><strong>Long-lasting battery </strong>up to 23 hours on video playback<strong>.</strong></li>
                </ul>
            </div>
        </>
    )
}

export default Product
