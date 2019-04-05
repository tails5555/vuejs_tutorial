<template>
    <div>
        <input type="text" class="todo-input" placeholder="Input Your TODO" v-model="new_todo" @keyup.enter="add_todo" />
        <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <div v-for="(todo, idx) in todos_filter" :key="todo.id" class="todo-item">
                <div class="todo-item-left">
                    <input type="checkbox" v-model="todo.completed" />
                    <div 
                        class="todo-item-label" 
                        v-if="!todo.editing" 
                        @dblclick="edit_todo(todo)"
                        :class="{ completed : todo.completed }"
                    >
                        {{ todo.title }}
                    </div>
                    <input 
                        class="todo-item-edit" type="text"
                        v-else
                        v-focus
                        v-model="todo.title" 
                        @blur="done_edit(todo)" 
                        @keyup.enter="done_edit(todo)" 
                        @keyup.esc="cancel_edit(todo)" 
                    />
                </div>
                <div class="remove-item" @click="remove_todo(idx)">&times;</div>
            </div>
        </transition-group>
        <div class="extra-container">
            <div>
                <label>
                    <input type="checkbox" :checked="!any_remaining" @change="check_all_todos" /> Check All
                </label>
            </div>
            <div>{{ remaining }} items left</div>
        </div>

        <div class="extra-container">
            <div>
                <button :class="{ active: filter === 'all' }" @click="filter = 'all'">All</button>
                <button :class="{ active: filter === 'active' }" @click="filter = 'active'">Active</button>
                <button :class="{ active: filter === 'completed' }" @click="filter = 'completed'">Completed</button>
            </div>
            <div>
                <transition name="fade">
                    <button v-if="showing_cleared_btn" @click="clear_completed">
                        Clear Completed
                    </button>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'todo-list',
    data () {
        return {
            new_todo: '',
            todos: [
                {
                    id: 1,
                    title: 'VueJS 공부하기',
                    completed: false,
                    editing: false,
                },
                {
                    id: 2,
                    title: 'OPic 스크립트 패턴 공부하기',
                    completed: false,
                    editing: false,
                },
                {
                    id: 3,
                    title: '백준 알고리즘 풀기',
                    completed: false,
                    editing: false,
                },
                {
                    id: 4,
                    title: '짐티비 가서 운동하기',
                    completed: false,
                    editing: false,
                },{
                    id: 5,
                    title: '돈가스 먹으러 가기',
                    completed: false,
                    editing: false,
                }
            ],
            new_id: 6,
            before_cache: '',
            filter: 'all',
        }
    },
    computed: {
        remaining() {
            return this.todos.filter(todo => !todo.completed).length;
        },
        any_remaining() {
            return this.remaining !== 0;
        },
        todos_filter() {
            switch(this.filter) {
                case 'all':
                    return this.todos;
                case 'completed':
                    return this.todos.filter(todo => todo.completed);
                case 'active':
                    return this.todos.filter(todo => !todo.completed);
            }
        },
        showing_cleared_btn() {
            return this.todos.filter(todo => todo.completed).length > 0;
        }
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus();
            }
        }
    },
    methods: {
        add_todo() {
            if(this.new_todo.trim().length === 0) {
                alert('CONFIRM YOUR NEW TODO CONTEXT!');
                return;
            }

            this.todos.push({
                id: this.new_id,
                title: this.new_todo,
                completed: false
            });

            this.new_todo = '';
            this.new_id += 1;
        },
        remove_todo(idx){
            this.todos.splice(idx, 1);
        },
        edit_todo(todo){
            this.before_cache = todo.title;
            todo.editing = true;
        },
        done_edit(todo){
            if(todo.title.trim() === '') {
                alert('CONFIRM YOUR EDIT TODO CONTEXT!');
                todo.title = this.before_cache;
                return;
            }
            this.before_cache = '';
            todo.editing = false;
        },
        cancel_edit(todo) {
            todo.title = this.before_cache;
            todo.editing = false;
        },
        check_all_todos() {
            this.todos.forEach(todo => todo.completed = event.target.checked);
        },
        clear_completed() {
            this.todos = this.todos.filter(todo => !todo.completed);
        }
    },
}
</script>


<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    &:focus {
        outline: 0;
    }
}

.todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
}

.todo-item-left {
    display: flex;
    align-items: center;
}

.todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
}

.todo-item-edit {
    font-size: 24px;
    color: #2C3E50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #CCCCCC;
    font-family: 'Avenir', Arial, Helvetica, sans-serif
}

.remove-item {
    cursor: pointer;
    margin-left: 14px;

    &:hover {
        color: black;
    }
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgray;
    padding-top: 14px;
    margin-bottom: 14px;
}

button {
    font-size: 14px;
    background-color: white;
    apperance: none;

    &:hover {
        background: lightgreen;
    }

    &:focus {
        outline: none;
    }
}

.active {
    background: lightgreen;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>