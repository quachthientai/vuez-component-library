import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance } from 'vue';

enum NAMESPACES {
	BUTTON_GROUP = 'vz-button-group',
};

const vButtonGroupProps = makePropsFactory({
});

const ButtonGroup = defineComponent({
	name: 'ButtonGroup',
	props: vButtonGroupProps,
	inheritsAttrs: false,
	emits: [],
	setup(props, { slots, emit, attrs }) {

		const componentID = generateComponentId(NAMESPACES.BUTTON_GROUP);

		const booleanContext = computed(() => {
			return {
			}
		});

		const {
		} = booleanContext.value;

		const componentClasses = computed(() => {
			return {
			}
		});

		const componentAttrs = computed(() => {
			return {
				...attrs,
				'data-vz-component': Helpers.toPascalCase(NAMESPACES.BUTTON_GROUP, '-'),
			};
		});

		return {
			componentAttrs,
			componentClasses
		};
	},
	render() {
		return (
			<div>
			</div>
		);
	}
});

type ButtonGroupType = InstanceType<typeof ButtonGroup>;

export {
	ButtonGroup,
	ButtonGroupType,
};