# https://leetcode.com/problems/longest-common-prefix/

# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  str = strs[0]

  strs.each do |word|
    str = cut_string(word, str)
    return '' if str == ''
  end

  str
end

def cut_string(base_string, string_to_cut)
  response = ''
  index = 0

  base_string.each_char do |letter|
    return response if index == string_to_cut.length || letter != string_to_cut[index]

    response += letter
    index += 1
  end
end
