// for setting the mbti letters later
const mbti_letters = ["x", "x", "x", "x"]

//extroverted functions
extro_func_points = {"Te": 0, "Fe": 0, "Se": 0, "Ne": 0}

//introverted functions - if user is an Te or Fe
intro_func_TeFe_points = {"Si": 0, "Ni": 0}
//if user is an Se or Ne
intro_func_SeNe_points = {"Fi": 0, "Ti": 0}

//questions - extroverted functions
function display_quiz() {
    const extro_func_q = [
        {
            question: "insert question here", 
            choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
            up_score: ["Te", "Fe", "Se", "Ne"]
        }, 
    ]
    const intro_func_TeFe_q = [
        {
            question: "insert question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["Si", "Ni"]
        }
    ] 
    const intro_func_SeNe_q = [
        {
            question: "insert question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["Fi", "Ti"]
        }
    ] 
    const extro_or_intro_q = [
        {
            question: "insert question here",
            choices: ["answer 1", "answer 2"],
            up_score: ["E", "I"]
        }
    ]


    let current_q_index = 0
    let current_q_list = extro_func_q

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

    function handle_choice_click(choice_index) {
        console.log(choice_index)
        const current_q = current_q_list[current_q_index]
        const selected_up_score = current_q.up_score[choice_index];
        // update scores based on selected choice
        if (current_q_list == extro_func_q) {
            if (selected_up_score == "Te") {
                if ((extro_func_points["Te"] += 1) == 1) {
                    current_q_index++;
                    current_q_list = intro_func_TeFe_q;
                    current_q_index = 0;
                    mbti_letters[2] = "T"
                    console.log("yippee")
                }
            }
        }
    }

    display_current_q();    
}

display_quiz();