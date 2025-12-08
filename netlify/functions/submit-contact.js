// netlify/functions/submit-contact.js

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse the request body
        const data = JSON.parse(event.body);

        // Validate required fields
        const { name, email, message } = data;

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Missing required fields',
                    required: ['name', 'email', 'message']
                })
            };
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Log the submission (you can store this in a database later)
        console.log('Contact form submission:', {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        });

        // TODO: Add email sending logic here in next step

        // Return success response
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                message: 'Form submitted successfully',
                data: { name, email }
            })
        };

    } catch (error) {
        console.error('Error processing form:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal server error',
                message: error.message
            })
        };
    }
};