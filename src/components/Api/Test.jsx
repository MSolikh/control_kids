import React, { useState } from 'react'

export default function Test() {
	const sendDataToServer = async () => {

		const [videoUrl, setVideoUrl] = useState([])

    if(selectedCheckboxes.length === 0){
			console.log("Выберите хотя бы одну галочку");
			notify();
      return;
    }

    try {
      const response = await axios.post('http://localhost/give_url.php', selectedCheckboxes);
      setResponseData(response.data);
      setVideoUrl([videoUrl, response.data]);
      localStorage.setItem('token', response.data);
      navigate('/');
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
}
