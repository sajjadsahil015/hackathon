const processor = require('./processor');

module.exports = function (context, options) {
  return {
    name: 'context7-loader',
    async loadContent() {
      console.log('[Context7] Fetching content...');
      // Mock fetch logic for MVP
      return [
        {
          id: 'ros2-basics',
          title: 'Imported: ROS 2 Basics',
          content: 'This content was fetched from Context7.',
          target: '01-Module-1-Robotic-Nervous-System/01-Week-1/02-imported.mdx'
        }
      ];
    },
    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      await processor.processContent(content, actions);
    },
  };
};