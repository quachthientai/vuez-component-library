import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { Input } from '@/components/Input/Input';
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance } from 'vue';

enum NAMESPACES {
	SELECT = 'vz-select',
};

const vSelectProps = makePropsFactory({
	value: {
		default: undefined,
	},
	modelValue: {
		default: undefined,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const Select = defineComponent({
	name: 'Select',
	props: vSelectProps,
	inheritsAttrs: false,
	emits: [],
	setup(props, { slots, emit, attrs }) {
		const componentID = generateComponentId(NAMESPACES.SELECT);

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
				'data-vz-component': Helpers.toPascalCase(NAMESPACES.SELECT, '-'),
			};
		});

		return {
			componentAttrs,
			componentClasses
		};
	},
	render() {
		return (
			<Input 
				
			/>
		);
	}
});

type SelectType = InstanceType<typeof Select>;

export {
	Select,
	SelectType,
};