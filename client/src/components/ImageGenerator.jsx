import { useState } from 'react';
import Input from './Input';
const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle the API request when button is clicked
  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log('Sending request to the backend...');
      const response = await fetch('http://localhost:5000/openai/generateImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),  // Pass the prompt to the API
      });

      console.log('Response received:', response);
      if (!response.ok) {
        throw new Error('Failed to fetch: ' + response.statusText);
      }

      const data = await response.json();
      console.log('Parsed response data:', data);

      if (data.success) {
        setImageUrl(data.data);  // Set the image URL from the response
        console.log('Image URL:', data.data);
      } else {
        console.log('data is not success!');
        console.error('API returned failure:', data.error);
        setError('Failed to generate image. Backend error: ' + data.error);
      }
    } catch (error) {
      console.error('Error occurred:', error.message);
      console.log('here')
      setError('Error generating image: ' + error.message);
    } finally {
      setLoading(false);
      console.log('Image generation process completed.');
    }
  };


  return (
    <section className='w-full h-full relative'>
      <h1 className='header text-3xl my-12 p-6'>AI Image Generator</h1>
      <Input 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      {/* <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}  // Update prompt state on input change
        placeholder="Enter a prompt"
      /> */}
      
      <button onClick={handleGenerateImage} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Image'}
      </button>

      {error && <p>{error}</p>}
      {imageUrl && <img src={imageUrl} alt="Generated" />}  {/* Display the generated image */}
      <div class="card"></div>
    </section>
  );
};

export default ImageGenerator;
