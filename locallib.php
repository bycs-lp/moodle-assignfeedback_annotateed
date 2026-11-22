<?php
defined('MOODLE_INTERNAL') || die();

class assign_feedback_annotateed extends assign_feedback_plugin {
    public function get_name() {
        return get_string('pluginname', 'assignfeedback_annotateed');
    }

    
    public function get_form_elements_for_user($grade, MoodleQuickForm $mform, stdClass $data, $userid) {
        global $OUTPUT;
        // Fixed for now: a short text and the four categories of the React project.
        $props = [
            'text' => 'Der Schüler schreibt einen kurzen Text mit einem Fehler.',
            'categories' => [
                ['name' => 'none', 'title' => 'Keine Kategorie', 'color' => '#CCCCCC'],
                ['name' => 'grammatik', 'title' => 'Grammatik', 'color' => '#EF5350'],
                ['name' => 'inhalt', 'title' => 'Inhalt', 'color' => '#FF9800'],
                ['name' => 'ausdruck', 'title' => 'Ausdruck', 'color' => '#FFD54F'],
            ],
        ];

        $html = $OUTPUT->render_from_template('assignfeedback_annotateed/editor', ['propsjson' => json_encode($props)]);
        $mform->addElement('html', $html);
        return true;
    }
}