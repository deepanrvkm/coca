import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
}, { collection: 'testimonials' });

const TestimonialModel = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);

export default TestimonialModel;
