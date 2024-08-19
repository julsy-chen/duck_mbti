// for setting the mbti letters later
const mbti_letters = ["x", "x", "x", "x"]

//extroverted functions points
extro_func_points = {"Te": 0, "Fe": 0, "Se": 0, "Ne": 0}

//introverted functions - if user is an Te or Fe
intro_func_TeFe_points = {"Si": 0, "Ni": 0}
//if user is an Se or Ne
intro_func_SeNe_points = {"Fi": 0, "Ti": 0}

// determines E or I letter based on coping mechanism
extro_or_intro_points = {"E": 0, "I": 0}

//questions - extroverted functions
function display_quiz() {
    const extro_func_q_list = [
        {
            question: "insert question here", 
            choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
            up_score: ["Te", "Fe", "Se", "Ne"]
        }, 
        {
            question: "insert 2nd question here", 
            choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
            up_score: ["Te", "Fe", "Se", "Ne"]
        },
        {
            question: "insert 3rd question here", 
            choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
            up_score: ["Te", "Fe", "Se", "Ne"]
        }
    ]
    const intro_func_TeFe_q_list = [
        {
            question: "insert question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["Si", "Ni"]
        },
        {
            question: "insert 2nd question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["Si", "Ni"]
        },
        {
            question: "insert 3rd question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["Si", "Ni"]
        }
    ] 
    const intro_func_SeNe_q_list = [
        {
            question: "insert question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["Fi", "Ti"]
        },
        {
            question: "insert 2nd question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["Fi", "Ti"]
        },{
            question: "insert 3rd question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["Fi", "Ti"]
        }
    ] 
    let extro_or_intro_choices = [
        "istj and isfj answer", //0
        "esfj and enfj answer", //1
        "intj and infj answer", //2
        "estj and entj answer", //3
        "isfp and infp answer", //4
        "esfp and estp answer", //5
        "enfp and entp answer", //6 
        "istp and intp answer", //7
    ]
    const extro_or_intro_q = [
        {
            question: "insert question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["E", "I"],            
        }
    ]    


    let current_q_index = 0
    let current_q_list = extro_func_q_list

    function display_current_q() {
        const current_q = current_q_list[current_q_index];
        const q_element = current_q.question;
        q_element.textContent = current_q.question;
        const choice_containers = document.getElementById('choices');

        current_q.choices.forEach((choice, index) => {
            const button = document.createElement('button'); // create button element
            button.textContent = choice // the text for the button will be the choices
            button.classList.add('choices');
            button.addEventListener('click', () => handle_choice_click(index)); // look for click event to get index 
            choice_containers.appendChild(button);
        })

    }

    function determine_choices_for_extro_or_intro_q() {
        const mbti_undetermined = mbti_letters.join('');
        const extro_or_intro_q_choices = extro_or_intro_q[0].choices;
        let first_choice = extro_or_intro_q_choices[0]
        let second_choice = extro_or_intro_q_choices[-1]
        switch (mbti_undetermined) {
            case "xSTJ":
                first_choice = extro_or_intro_choices[3]
                second_choice = extro_or_intro_choices[0]
                break;
            case "xSTJ":
                first_choice = extro_or_intro_choices[1]
                second_choice = extro_or_intro_choices[0]
                break;
            case "xNTJ":
                console.log("please work")
                first_choice = extro_or_intro_choices[3]
                second_choice = extro_or_intro_choices[2]
                break;
            case "xNFJ":
                first_choice = extro_or_intro_choices[1]
                second_choice = extro_or_intro_choices[2]
                break;
            case "xSFP":
                first_choice = extro_or_intro_choices[5]
                second_choice = extro_or_intro_choices[4]
                break;
            case "xNFP":
                first_choice = extro_or_intro_choices[6]
                second_choice = extro_or_intro_choices[4]
                break;
            case "xSTP":
                first_choice = extro_or_intro_choices[5]
                second_choice = extro_or_intro_choices[7]
                break;
            case "xNTP":
                first_choice = extro_or_intro_choices[6]
                second_choice = extro_or_intro_choices[7]
                break;
        }
    }

    function handle_choice_click(choice_index) {
        console.log(choice_index)
        const current_q = current_q_list[current_q_index]
        const selected_up_score = current_q.up_score[choice_index];
        // update scores based on selected choice
        switch (current_q_list) {
            case extro_func_q_list:
                switch (selected_up_score) {
                    case "Te":
                        if ((extro_func_points["Te"] += 1) == 3) {
                            current_q_list = intro_func_TeFe_q_list;
                            current_q_index = 0;
                            mbti_letters[2] = "T"
                        } else {
                            current_q_index++
                        }
                        break;
                    case "Fe":
                        if ((extro_func_points["Fe"] += 1) == 3) {
                            current_q_list = intro_func_TeFe_q_list;
                            current_q_index = 0;
                            mbti_letters[2] = "F"
                        } else {
                            console.log('hi')
                            current_q_index++
                        }
                        break;
                    case "Se":
                        if ((extro_func_points["Se"] += 1) == 3) {
                            current_q_list = intro_func_SeNe_q_list;
                            current_q_index = 0;
                            mbti_letters[1] = "S"
                        } else {
                            current_q_index++
                        }
                        break;
                    case "Ne":
                        if ((extro_func_points["Ne"] += 1) == 3) {
                            current_q_list = intro_func_SeNe_q_list;
                            current_q_index = 0;
                            mbti_letters[1] = "N"
                        } else {
                            current_q_index++
                        }
                        break;
                }
                break;
            case intro_func_TeFe_q_list:
                switch (selected_up_score) {
                    case "Si":
                        if ((intro_func_TeFe_points["Si"] += 1) == 3) {
                            current_q_list = extro_or_intro_q;
                            current_q_index = 0;
                            mbti_letters[1] = "S"
                            mbti_letters[3] = "J"
                            determine_choices_for_extro_or_intro_q()
                        } else {
                            current_q_index++
                        }
                        break;
                    case "Ni":
                        if ((intro_func_TeFe_points["Ni"] += 1) == 3) {
                            current_q_list = extro_or_intro_q;
                            current_q_index = 0;
                            mbti_letters[1] = "N"
                            mbti_letters[3] = "J"
                            determine_choices_for_extro_or_intro_q()
                        } else {
                            current_q_index++
                        }
                        break;
                }
                break;
            case intro_func_SeNe_q_list:
                switch(selected_up_score) {
                    case "Fi":
                        if ((intro_func_SeNe_points["Fi"] += 1) == 3) {
                            current_q_list = extro_or_intro_q;
                            current_q_index = 0;
                            mbti_letters[2] = "F"
                            mbti_letters[3] = "P"
                            determine_choices_for_extro_or_intro_q()
                        } else {
                            current_q_index++
                        }
                        break;
                    case "Ti":
                        if ((intro_func_SeNe_points["Ti"] += 1) == 3) {
                            current_q_list = extro_or_intro_q;
                            current_q_index = 0;
                            mbti_letters[2] = "T"
                            mbti_letters[3] = "P"
                            determine_choices_for_extro_or_intro_q()
                        } else { 
                            current_q_index++
                        }
                        break;
                }
                break;
            case extro_or_intro_q:
                switch(selected_up_score) {
                    case "E":
                        mbti_letters[0] = "E"
                            // move on to showcasing the mbti for the user
                        break;
                    case "I":
                        mbti_letters[0] = "I"
                            // move on to showcasing the mbti for the user
                        break;
                }
                break;
        }

    }
    display_current_q();    
}

display_quiz();