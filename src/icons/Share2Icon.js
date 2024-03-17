const Share2Icon = {
    name: 'Share2Icon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})};

        return function () {
            return render('svg', svg, [
                    render('circle', {cx: "18", cy: "5", r: "3"}),
                    render('circle', {cx: "6", cy: "12", r: "3"}),
                    render('circle', {cx: "18", cy: "19", r: "3"}),
                    render('line', {x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49"}),
                    render('line', {x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49"})
                ]
            );
        }
    }
};

export default Share2Icon;
