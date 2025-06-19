import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F0FB',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#1F2937',
    marginBottom: 6,
    textAlign: 'center',
    fontFamily: 'Cairo-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'Cairo-Regular',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 16,
    fontFamily: 'Cairo-Regular',
    marginBottom: 16,
    textAlign: 'right',
    color: '#111827',
  },
  loginButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cairo-Bold',},
  footer: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
    fontFamily: 'Cairo-Regular',
  },
  signupText: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '600',
    fontFamily: 'Cairo-Bold',
  },
});
