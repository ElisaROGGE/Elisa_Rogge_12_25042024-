export const fetchUserData = async (endPoint: string) => {
    try {
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data
    } catch (error) {
      console.log(error);
    }
  };