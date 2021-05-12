
const Background = ({IsEnabled}) => {
    return(
        <>
          {IsEnabled? () => {
            document.getElementById('root').classList.append("bg-gray-700");
          }
          :
          () => {
            document.getElementById('root').classList.append("bg-gray-200");
          }
          }
        </>
    );
}

export default Background;
