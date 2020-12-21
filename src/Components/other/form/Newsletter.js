import reactOnboardingPro from "react-onboarding-pro";
import "../../../Styles/other/form/Newsletter.scss";

export const OpenOnboarding = () => {
    const config = {
      steps: [
        {
          title: "Newsletter",
          description: "Sign up for the dystic newsletter to receive updates"
        },
        {
            title: 'Sign Up',
            description: 'Sign Up to the dystic Newsletter',
            type: 'form',
            fields: [
              {
                label: 'Name',
                name: 'name',
                type: 'text',
                placeholder: '',
                validation: '[a-zA-Z]' // Regex
              },
              {
                label: 'Email',
                name: 'email',
                type: 'text',
                placeholder: '',
                validation: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
              },
            ],
            onSubmit: newsSubmit
          },
      ],
      overlayClose: true
    };

    reactOnboardingPro(config);
  };

  function newsSubmit(){
      console.log('Here');
  }

